import Tour from "./Tour"

export default function Tours({tours, removeTour}) {
    return(
        <section>
            <div className="title">
                <h1>Our Tours</h1> 
            </div>
            <div className="underline"></div>
            <div>
                {tours.map(tour => 
                    <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                )}
            </div>
        </section>
    )
}