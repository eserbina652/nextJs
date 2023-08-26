import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {


    return (
        <MainContainer>
            <h1>User's list</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return {
        props: {users}
    }
}