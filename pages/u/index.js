import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';



// GQL

const userInput = {
    "id": "6332672fd089f7f4af211715",
    "editUserInput": {
        "name": "next update"
    }
};

const UpdateUser = gql`
  mutation EditUser($id: ID!, $editUserInput: EditUserInput) {
    editUser(ID: $id, editUserInput: $editUserInput)
  }
`

const Index = () => {

    const [updateUser] = useMutation(UpdateUser);
    function dataAdd() {
        updateUser({variables: userInput}).then(r => {
            console.log(r);
        }).catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        dataAdd()
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
