import React from "react";

const CardOpp= ({ data }) =>  {
    const { name, desc } = data;
    return (
        <>
           <div class="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">
                                {desc}
                            </p>
                        </div>
                </div>
        </>);
}

export default CardOpp;