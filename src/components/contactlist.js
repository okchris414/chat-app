import React from 'react';
import Contact from './contact.js';


class Contactlist extends React.Component {
    render () {
         const userlist =[
             {
                name: "Milton Anderson",
                avatar: "https://randomuser.me/api/portraits/men/88.jpg",
                status: "online",
            },
             {
                name: "Leonard Cruz",
                avatar: "https://randomuser.me/api/portraits/men/55.jpg",
                status: "online",
            },
             {
                name: "stella hansen",
                avatar: "https://randomuser.me/api/portraits/women/7.jpg",
                status: "online",
            },
            {
                name: "Felecia Beck",
                avatar: "https://randomuser.me/api/portraits/women/49.jpg",
                status: "online",
            },
            {
                name: "Avery Lowe",
                avatar: "https://randomuser.me/api/portraits/women/21.jpg",
                status: "online",
            },
        ];

        const contactsElement = userlist.map((user) => {
            return (
                <Contact name={user.name} nameavatar={user.avatar} status={user.status} />
            );
        });


        return (
            <div>
               {contactsElement}
            </div>
        );
    }
   
}

export default Contactlist