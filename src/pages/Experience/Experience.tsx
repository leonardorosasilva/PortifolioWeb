import styles from './Experience.module.css';
import { UseRepositories } from '../../useHooks/Fetch/useRepositories';
import { useState, useEffect } from 'react';    

export function Experience(){

    const { repositories , isLoading, error } = UseRepositories()
    console.log('Repositories',repositories, isLoading, error)

    function capitalizeWords(sentence : string) {
        const words = sentence.split(' ');
        const capitalizedWords = words.map(word => capitalize(word));
        return capitalizedWords.join(' ');
      }
    
      function capitalize(str : string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return(
        <>
        <h1>Experiencias</h1>
            {repositories?.map((repository ) => {
                return (
                    <div className={styles.containerExperience}>
                        <h2>{ capitalizeWords(repository?.name.replace('-',' ')) }</h2>
                        <p>{repository?.description}</p>
                        <a target='_blank' href={repository?.svn_url} >{repository.svn_url}</a>
                        <p>{repository?.language}</p>
                        <p>{repository?.created_at}</p>
                    </div>
                )
            })}
        </>
    )
}