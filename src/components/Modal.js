function Modal(props){
    return (
        <>
        <div className="modal" >
            <h2>제목 : {props.topic[props.topicNumber]}</h2>
            <p>날짜 : {props.date}</p>
            <p>상세내용 : {props.detail}</p>
        </div>
        </>
    )
}

export default Modal;