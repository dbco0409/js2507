import Box from './Box.jsx';

function BoxList(props){
    if(props.num==4){
        return(
            <div class="boxList">
                <Box txt="A" name="box1"/>
                <Box txt="B" name="box1"/>
                <Box txt="C" name="box1"/>
                <Box txt="D" name="box1"/>
            </div>
        )
    }else if(props.num==2){
        return(
            <div class="boxList">
                <Box txt="A" name="box2"/>
                <Box txt="B" name="box2"/>
            </div>
        )
    }
}

export default BoxList;