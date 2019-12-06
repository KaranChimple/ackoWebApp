import React, { PureComponent } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { MdMailOutline } from 'react-icons/md';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Sections from './Sections';
import { Card } from './card';
import { list } from './data.enum';

const containers = ['Yoga', 'Fitness', 'Dance', 'Pilates'];

var wd = window.innerWidth;
var ht = window.innerHeight;

class Schedule extends PureComponent {
    constructor() {
        super();
        this.state = {
            selectedHeader: 'Schedule',
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { selectedHeader, text } = this.state;
        return (
            <div className='main'>
                <div style={styles.backgroundImage}>
                    <div className='overlay-container' style={styles.upperHeader}>
                        <div className='overlay-container' style={styles.centerContainer}>
                            <Link to='/'><h3 style={{ color: '#fff' }}>FITME</h3></Link>
                            <Link to='/' style={{ ...styles.navigationHeaders, ...{ borderWidth: selectedHeader === 'Schedule' ? 2 : 0, borderBottomColor: '#b19cd9' } }}>Schedule</Link>
                            <Link to='/overview' style={{ ...styles.navigationHeaders, ...{ borderWidth: selectedHeader === 'Schedule' ? 2 : 0, borderBottomColor: '#b19cd9' } }}>Overview</Link>
                            <Link to='/articles' style={{ ...styles.navigationHeaders, ...{ borderWidth: selectedHeader === 'Schedule' ? 2 : 0, borderBottomColor: '#b19cd9' } }}>Articles</Link>
                        </div>

                        <div className='overlay-container' style={styles.centerContainer}>
                            <MdMailOutline size={24} color={'#fff'} style={{ marginRight: 10 }} />
                            <div style={styles.profileIcon} />
                            <Link to='/profile'><h3 style={{ color: '#fff' }}>Profile</h3></Link>
                        </div>
                    </div>
                    <div style={{ marginTop: '5%' }}>
                        <div className='centered-text'>
                            <h2>Let us find your perfect </h2>
                            <h4 style={{ marginLeft: 5, marginRight: 5, fontSize: 34 }}> fitness </h4>
                            <h2>classes!</h2>
                        </div>

                        <div>
                            <form onSubmit={this.handleSubmit} className='centered-text' style={styles.centerContainer}>
                                <textarea value={text} onChange={this.handleChange} cols={80} rows={3} style={{ borderRadius: 8 }} />
                                <input type="submit" value="Search" style={{ width: '7%', marginLeft: 10, backgroundColor: '#b19cd9', borderRadius: 8, padding: 5, color: '#fff' }} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='centered-text' style={{ marginTop: `-5%`, marginBottom: 20 }}>
                    {containers.map(item => <Sections title={item} />)}
                </div>

                <div style={{ marginBottom: ht * 0.1 }}>
                    <GridList cols={2}>
                        {list.map((item, index) => {
                            return (
                                <GridListTile style={{ height: '90%' }} key={index}>
                                    <Card item={item} />
                                </GridListTile>
                            )
                        })}
                    </GridList>
                </div>

                <div className='overlay-container' style={styles.lowerContainer}>
                    <div className='column-arranged-container' style={{ width: '25%' }}>
                        <div style={styles.brandIcon}>
                            acko
                        </div>
                        <p style={styles.lowerBoxText}>Acko General Insurance Ltd.</p>
                        <p style={styles.lowerBoxText}>Unit No. 301 & 302, 3rd Floor, F wing, Lotus Corporate Park, Off Western Express Highway, Jay Coach, Goregaon East, Mumbai 400063</p>
                        <p style={styles.lowerBoxText}>Email: hello@acko.com</p>
                        <p style={styles.lowerBoxText}>Phone: 1860 266 2256</p>
                    </div>
                    <div className='column-arranged-container' style={{ width: '20%' }}>
                        <div style={styles.lowerHeader}>
                            {`${'company'}`.toUpperCase()}
                        </div>
                        <Link style={styles.lowerLink}>About US</Link>
                        <Link style={styles.lowerLink}>Board Of Directors</Link>
                        <Link style={styles.lowerLink}>Careers</Link>
                        <Link style={styles.lowerLink}>Articles</Link>
                        <Link style={styles.lowerLink}>Partnerships</Link>
                        <Link style={styles.lowerLink}>Sitemap</Link>
                    </div>
                    <div className='column-arranged-container' style={{ width: '20%' }}>
                        <div style={styles.lowerHeader}>
                            {`${'support'}`.toUpperCase()}
                        </div>
                        <Link style={styles.lowerLink}>Consumer Buying Process</Link>
                        <Link style={styles.lowerLink}>{`${'Cancellations & Refunds'}`}</Link>
                        <Link style={styles.lowerLink}>Customer Service</Link>
                        <Link style={styles.lowerLink}>Downloads</Link>
                        <Link style={styles.lowerLink}>Contact Us</Link>
                    </div>
                    <div className='column-arranged-container' style={{ width: '20%' }}>
                        <div style={styles.lowerHeader}>
                            {`${'legal'}`.toUpperCase()}
                        </div>
                        <Link style={styles.lowerLink}>Whistleblower Policy</Link>
                        <Link style={styles.lowerLink}>{`${'Public Disclosure'}`}</Link>
                        <Link style={styles.lowerLink}>Financials & Disclosures</Link>
                        <Link style={styles.lowerLink}>Privacy Policy</Link>
                        <Link style={styles.lowerLink}>Terms & Conditions</Link>
                        <Link style={styles.lowerLink}>Stewardship Code</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    backgroundImage: {
        backgroundColor: 'purple',
        height: '60%'
    },
    upperHeader: {
        // backgroundColor: 'red'
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileIcon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'red',
        marginRight: 5
    },
    navigationHeaders: {
        color: '#fff',
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#fff',
    },
    lowerContainer: {
        backgroundColor: '#000',
        marginTop: 20,
        padding: 40
    },
    brandIcon: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '40%',
        padding: 5
    },
    lowerBoxText: {
        color: '#fff'
    },
    lowerHeader: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16
    },
    lowerLink: {
        color: '#fff',
        marginBottom: 12
    }
}

export default Schedule;

