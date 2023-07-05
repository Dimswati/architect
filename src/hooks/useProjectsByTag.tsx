import projectsList from "../lib/projects"

export type Project = {
    id: number;
    title: string;
    tags: string[];
    imageUrl: string;
}

export const useFilters = () => {

  const tags = projectsList.map(project => ([...project.tags])).reduce((acc, arr)=> acc.concat(arr), [])

  const uniqueTags = [...new Set(tags)]

  return {
    tags: uniqueTags
  }
}

const useProjectsByTag = ( filterTag: string ) => {

    const projectsByTag = projectsList.reduce<Project[]>((acc, obj: Project)=> {
        //check if object tag has filter tag precent
        const tags = obj.tags
        const filterTagPresent = tags.includes(filterTag)

        if(filterTagPresent){
          return acc.concat(obj)
        }

        return acc
    }, [])

  return {
    projectsByTag
  }
}

export default useProjectsByTag