import Container from "../components/Container"
import TeamMember from "../components/TeamMember"
import useTeam from "../hooks/useTeam"

const Team = () => {

  const { team } = useTeam()

  return (
    <Container innerClasses="container grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {team?.map(member => (<TeamMember key={member.id} {...member}/>))}
    </Container>
  )
}

export default Team