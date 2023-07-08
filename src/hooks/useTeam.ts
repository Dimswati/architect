import team from "../lib/team"

const useTeam = (memberId?: number) => {

    if(!memberId){
        return {
            team,
            teamMember: null
        }
    }

    const teamMember = team.find(member => member.id === memberId)

    if(!teamMember){
        throw new Error(`Not Found TeamMember with id ${memberId}`)
    }

    return {
        teamMember,
        team: null
    }
}

export default useTeam