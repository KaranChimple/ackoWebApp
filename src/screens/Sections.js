import React from 'react';
import { MdFavorite } from 'react-icons/md';
import './styles.css';

function Sections(item) {
    return (
            <div className='rounded-container' style={styles.conatiner}>
                <MdFavorite size={54} />
                <h2>{item.title}</h2>
            </div>
    );
}

const styles={
    conatiner: {
        borderWidth: 2,
        // width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        zIndex: 2
    }
}

export default Sections;