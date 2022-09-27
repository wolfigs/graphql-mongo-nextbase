import {gql, useMutation} from '@apollo/client';
import {useEffect} from 'react';



// GQL

const userInput = {
    "id": "63326c19b99cd8d0c75a1bd5"
};

const DeleteUser = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(ID: $id)
  }
`

const Index = () => {

    const [deleteUser] = useMutation(DeleteUser);

    function dataDelete() {
        deleteUser({variables: userInput}).then(r => {
            console.log(r);
        }).catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        dataDelete()
    }, [])

    // GQL


    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    // createUser({ variables: { type: input.value } });
                    // input.value = '';
                }}
            >
                <input
                    // ref={node => {
                    //     input = node;
                    // }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );

}

export default Index
