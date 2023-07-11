import React from 'react';

const head = (
    <div style={{width: "150px"}}>

    </div>)
const body = (
    <div style={{width: "150px"}}>

    </div>)
const rightArm = (
    <div style={{width: "150px"}}>

    </div>)
const leftArm = (
    <div style={{width: "150px"}}>

    </div>)
const leftFoot = (
    <div style={{width: "150px"}}>

    </div>)
const rightFoot = (
    <div>

    </div>)

const bodyParts = [head, body, rightArm, leftArm, leftFoot, rightFoot]

type ManProps = {
    numberOfMistakes: number
}
const Man = ({numberOfMistakes}: ManProps) => {
    return (
        <div style={{position: 'relative'}}>
            {bodyParts.slice(0, numberOfMistakes)}
            <div style={{
                height: '70px',
                width: '15px',
                background: 'black',
                position: "absolute",
                top: 0,
                right: 0
            }}/>
            <div style={{
                height: '70px',
                width: '15px',
                background: 'black',
                marginLeft: '150px'
            }}/>

            <div style={{
                height: '450px',
                width: '15px',
                background: 'black',
                marginLeft: '120px'
            }}/>

            <div style={{
                height: '15px',
                width: '250px',
                background: 'black',
            }}/>

        </div>
    );
};


export default Man;