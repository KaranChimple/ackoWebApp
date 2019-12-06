import React from 'react';
import Rating from '@material-ui/lab/Rating'
import './styles.css';

export const Card = ({ item }) => {
    return (
        <div className='card' style={styles.main}>
            <div className='card-container'>
                <img alt="" src={'https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'} style={styles.image} />
                <div style={{ marginLeft: 10 }}>
                    <h3>{item.title}</h3>
                    <h4>by <b>{item.author}</b></h4>
                    <p className='text'>{item.details}</p>
                </div>
            </div>

            <div className='card-container' style={{ justifyItems: 'space-between' }}>
                <div style={styles.columnListing}>
                    <text style={styles.tag}>Club: <text style={styles.text}>{item.club}</text></text>
                    <text style={styles.tag}>Partners: <text style={styles.text}>{item.Partners.map(i => `${i} `)}</text></text>
                    <text style={styles.tag}>Members: <text style={styles.text}>{item.members}</text></text>

                </div>

                <div className='card-container' style={{ ...styles.columnListing, ...{ textAlign: 'right' } }}>
                    <Rating name="half-rating" value={item.stars} precision={0.5} />
                    <text>({item.reviews} Reviews)</text>
                </div>
            </div>

            <div className='card-container' style={{marginTop: 5}}>
                <div>
                    <img alt="" src={'https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'} style={styles.avatar} />
                    <img alt="" src={'https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'} style={styles.avatar} />
                    <img alt="" src={'https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'} style={styles.avatar} />
                </div>
                <button style={styles.button}>
                    <text style={{ color: '#fff', fontWeight: 'bold' }}>SCHEDULE</text>
                </button>
            </div>
        </div>
    )
}

const styles = {
    main: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        height: '80%'
        // width: '30%'
    },
    image: {
        height: 150,
        width: 100,
        borderRadius: 4,
        marginTop: -20,
    },
    tag: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
    },
    columnListing: {
        flexDirection: 'column',
        display: 'flex'
    },
    button: {
        backgroundColor: '#b19cd9',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    avatar: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginLeft: -4
    }
}