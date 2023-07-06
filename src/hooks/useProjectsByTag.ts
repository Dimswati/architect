import { useMemo } from "react";
import projectsList from "../lib/projects"

const useProjectsByTag = ( filterTag: string ) => {

    const projects = projectsList.reduce<Project[]>((acc, obj)=> {
        //check if object tag has filter tag precent
        const tags = obj.tags
        const filterTagPresent = tags.includes(filterTag)

        if(filterTagPresent){
          return acc.concat(obj)
        }

        return acc
    }, [])

    const tags = useMemo<string[]>(()=>{
      return projectsList.map(project => ([...project.tags])).reduce((acc, arr)=> acc.concat(arr), [])
    }, [])

    const uniqueTags = [...new Set(tags)]

  return {
    projects,
    tags: uniqueTags
  }
}

export default useProjectsByTag