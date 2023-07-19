const person = {
    name: 'Babo',
    address: {
        line1: 'First Line of the address',
        city: 'Ankara',
        country: 'TR'
    },
    profiles: ['twitter0', 'insta1', 'face2'],
    printProfile: () => {
        person.profiles.map(
            (profile) => console.log(profile)

        )
    }
}


export default function LearningJavaScript() {
    return (
        <>
            <div className="LeaningJavaScript">{person.name}</div>
            <div className="LeaningJavaScript">{person.address.line1}</div>
            <div className="LeaningJavaScript">{person.profiles[1]}</div>
            <div className="LeaningJavaScript">{person.printProfile()}</div>

        </>
    )
}