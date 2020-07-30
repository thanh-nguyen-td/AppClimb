

const initData = [
    {
        id: '1',
        name: 'About Yourself',
        icon: 'comment',
        data: [{
            id: '4',
            title: 'Comtrary to popular belief, Lorem lpsum is not simply random text. It has roots in a piecde'
        }
        ],
        type: 1
    },
    {
        id: '2',
        name: 'Education',
        icon: 'graduation-cap',
        data: [{
            id: '5',
            title: 'London Hight Shool',
            isGraduation: false,
        },
        {
            id: '6',
            title: 'London University',
            isGraduation: true,

        },
        {
            id: '10',
            title: 'tieu hoc London',
            isGraduation: true,

        }],
        type: 2
    },
    {
        id: '3',
        name: 'Work Experience',
        icon: 'comment',
        data: [{
            id: '7',
            title: 'Gruby Company',
            position: 'Employee',
            duration: 2010
        },
        {
            id: '8',
            title: 'Minna Comany',
            position: 'Manage',
            duration: 2017
        }],
        type: 3
    }
];
export default initData
