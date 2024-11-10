import ShowcaseGridItem from "./ShowcaseGridItem";

const ShowcaseGrid = () => {
    const companies = [
        { href: "https://www.beardo.in/", src: "/images/companies/beardo.svg", companyName: "Beardo" },
        { href: "https://bharatpe.com/", src: "/images/companies/bharatpe.svg", companyName: "BharatPe" },
        { href: "https://www.coutloot.com/", src: "/images/companies/coutloot.svg", companyName: "CoutLoot" },
        { href: "https://www.fynd.com/", src: "/images/companies/fynd.svg", companyName: "Fynd" },
        { href: "https://www.suprdaily.com/", src: "/images/companies/suprdaily.svg", companyName: "Suprdaily" },
        { href: "https://www.peesafe.com/", src: "/images/companies/peesafe.svg", companyName: "PeeSafe" },
        { href: "https://homecapital.in/", src: "/images/companies/homeville.svg", companyName: "Homeville" },
        { href: "https://www.innov8.work/", src: "/images/companies/innov8.svg", companyName: "Innov8" },
        { href: "https://www.flickstree.com", src: "/images/companies/flickstree.svg", companyName: "Flickstree" }
    ];
    return (
        <div className="md:grid md:grid-cols-3 max-sm:flex max-sm:flex-wrap max-sm:pt-10 max-sm:justify-center max-sm:gap-5">
            {
                companies.map((company, index) => (
                    <ShowcaseGridItem
                        imageUrl={company.src}
                        key={index}
                        link={company.href}
                        companyName={company.companyName}
                    />
                ))
            }

        </div>
    )
}

export default ShowcaseGrid
