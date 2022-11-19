import '../style/AgentPage.css'

function AgentPage(){

    const readMoreBtn = document.querySelector(".read-more-btn");
    const text = document.querySelector(".text");

    function readmore(){
        text.classList.toggle("show-more");
        if (readMoreBtn.innerText === "Read More") {
            readMoreBtn.innerText = "Read Less";
        } else {
            readMoreBtn.innerText = "Read More";
        }
    }

    return(
        <>
            <h1>Hello world</h1>
            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis animi aliquam laboriosam velit, esse, blanditiis aspernatur sint est magnam debitis delectus in fuga fugiat repellat dignissimos ipsum necessitatibus corrupti veniam reprehenderit,<span className="dots"> ...</span> <span className="moreText"> assumenda sapiente expedita labore atque! Sint velit cumque minus pariatur quisquam, beatae ab quo impedit eaque soluta vel laboriosam itaque similique iste ex aut in nihil dolorem consequuntur possimus eligendi eos optio ipsam! Sint ullam voluptate obcaecati asperiores eos vero sed iusto magnam ad, vel repellat quidem? Omnis fugit accusantium, illo quos eos odio consectetur et nemo excepturi deleniti dolorum adipisci dolores delectus possimus libero, sed iusto dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque distinctio modi dicta ut impedit, vel dolore dolores maiores quis vitae nesciunt ab aut, praesentium facilis necessitatibus odio exercitationem velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, error fugit repellat laborum aspernatur neque eligendi officia eius quidem voluptates fugiat numquam, officiis ullam nemo, incidunt delectus. Consequuntur id veritatis odit, aspernatur libero recusandae doloremque necessitatibus aperiam esse eaque consectetur tempore qui quasi, corporis expedita excepturi natus reprehenderit illo temporibus. Veniam eius dolorem cumque! Iusto eum aut et ipsam nemo cum totam delectus explicabo? Quis odio perferendis aliquid facilis ea quaerat vero minima dolorem cumque, est ab! Vero fuga tenetur unde. Perferendis alias, fugit debitis culpa doloremque aperiam molestiae quos incidunt dolore iure officia! Blanditiis sint delectus quam quae nulla.</span></p>
            <button className="read-more-btn" onClick={readmore}>Read More</button>
        </>
    )
}

export default AgentPage