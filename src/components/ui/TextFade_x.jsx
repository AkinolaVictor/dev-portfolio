import TextEngine from '../TextEngine_x';


function TextFade(props) {


    return (
        <TextEngine
            defaultAnimation={{
                opacity: [0, 1]
            }}
            {...props} />
    );
}

export default TextFade
