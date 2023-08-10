import React from 'react';
import Card from '../../component/Card';
import { Link } from 'react-router-dom';

// var arr = ["a","b","c","d","f","e","g","h"]

const RenderCard=()=>{
    var arrCards=[]
    for (var i = 0; i < 48; i++) {
        var cardsInRow=[]
        for (let j = 0; j < 3; j++) {
            cardsInRow.push(//arr[i]
                    <Card key={i} Name={"card"}/>
            )
            i++
        }// row
        arrCards.push(
            <div className="row" key={i*i}>
                 {cardsInRow}
            </div>
        )
    }
    console.log(arrCards.length);
    return(
        <div className="columns">
            {arrCards}
        </div>
    )
}

const AllGame = () => {
    return (
        <div className='page' style={{background:"#252525"}}>
            <h1>AllGame</h1>
                {/* <nav> */}
                    {/* <ul> */}
                        <Link to={"Profile"}>
                        nav to
                        </Link>
                    {/* </ul> */}
                {/* </nav> */}
                <RenderCard/>
            
            
            {/* <ColumnedListFlexbox/> */}
            {/* <ColumnedListGrid/> */}
        </div>
    );
}

export default AllGame;
