import UserList from '../components/UserList'

export default function Users({users}){
    return <UserList users={[...users]}/>
}
export async function getStaticProps(context) {
    const users = [
        await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
        await (await fetch('https://jsonplaceholder.typicode.com/users/2')).json(),
    ]
    return {
      props: {users}, // will be passed to the page component as props
    }
  }