import React from 'react';

const OurTeam = () => {
    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "professional photographer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "professional photographer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "Lysa sandiago",
            title: "Photo Editor",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Daniel martin",
            title: "Photo Editor",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Vicky tanson",
            title: "Product manager",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/29.jpg",
            name: "Nilson kalin",
            title: "professional photographer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Tina watersone",
            title: "Brand designer",
        },
    ]
    return (
        <div data-aos="zoom-in"
        data-aos-duration="3000">
             <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                       This is our most exprenced team members in this sector. 
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </div>
    );
};

export default OurTeam;