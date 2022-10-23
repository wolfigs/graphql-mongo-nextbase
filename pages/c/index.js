import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';

// GQL

const userInput = {
    "userInput": {
        "name": "app",
        "status": "Cache app"
    }
};

const CreateUser = gql`
  mutation CreateUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      name
      status
    }
  }
`

const Index = () => {

    const [addUser] = useMutation(CreateUser);
    function dataAdd() {
        addUser({variables: userInput}).then(r => {
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
