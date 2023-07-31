type CharacterData = {
    [key: string]: string;
};

type Translations = {
    [key: string]: string;
};

type CharacterDataComponentProps = {
    step: CharacterData;
    translations: Translations;
    icon: React.ReactNode;
};

export default function CharacterDataComponent({
    step,
    translations,
    icon
}: CharacterDataComponentProps) {

    const divMainStyles = "flex flex-row justify-between items-center py-2 pr-2 mb-[2rem] mt-[2rem]"
    const divIconStyles = "flex flex-row justify-between items-center"
    const titleStyles = "text-[1rem] ml-2"
    const valueStyles = "text-[1rem] font-semibold";

    return (
        <>
            {Object.entries(step || {}).map(([stat, value], index) => {
                const translatedStat = translations[stat];

                return (
                    <div key={index} className={divMainStyles}>
                        <div className={divIconStyles}>
                            {icon}
                            <h1 className={titleStyles}>{translatedStat}</h1>{" "}
                        </div>

                        <p className={valueStyles}>{value}</p>
                    </div>
                );
            })}
        </>
    );
}
