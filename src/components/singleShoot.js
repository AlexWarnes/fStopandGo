import React from 'react';
import { connect } from 'react-redux';

// import './singleShoot.css';

export const SingleShoot = (props) => {
    const shoot = props.photoshoots.find((item) => item.id === props.match.params.shootId);
    const gearList = shoot.gearList.map((item, index) => {
        return <li className="gearList-item" key={index}>{item}</li>
    });

    return(
        <main>
            <section className="shoot">
                <div className="shoot-header">
                    <h2 className="shoot-title">{shoot.title}</h2>
                    <p className="shoot-location">{shoot.location}</p>
                </div>

                <article className="shoot-description-box">
                    <p className="shoot-description">{shoot.description}</p>
                </article>
                <article className="shoot-gearList-box">
                    <h3>Gear List</h3>
                    <ul className="shoot-gearList">
                        {gearList}
                    </ul>
                </article>
                <div className="map-placeholder">
                    <i className="fas fa-map-marked-alt map-placeholder-icon"></i>
                </div>
                </section>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        photoshoots: state.photoshoots
    }
}

export default connect(mapStateToProps)(SingleShoot);