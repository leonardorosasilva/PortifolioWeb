// Imports
import { useEffect, useState } from "react";
// import { useQuery, useMutation } from "react-query";

// Repositories
import { ListRepositiesAPI } from "../../services/API/ListRepositoriesAPI";

interface Repository {
    name: string;
    description: string;
    svn_url: string;
    language: string;
    created_at: string;
}

interface UseRepositoriesResponse {
    repositories: Repository[];
    isLoading: boolean;
    error: any;
}

export function UseRepositories() : UseRepositoriesResponse {
  
    // const [repositories, setRepositories] = useState([]);
    
    // const { data, isLoading, error } = useQuery('repositories', ListRepositiesAPI.getRepositories, {
    //     staleTime: 0, // 10 minutes
    // })
    
    // useEffect(() => {
    //     if(data){
    //     setRepositories(data)
    //     }
    // }, [data])
    
    // return { repositories, isLoading, error }

    const [repositories, setRepositories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        ListRepositiesAPI.getRepositories()
        .then((response) => {
            setRepositories(response)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [])

    return { repositories, isLoading, error }
}