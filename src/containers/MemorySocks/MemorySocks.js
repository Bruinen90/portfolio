import React, { Component } from 'react';
import styles from './MemorySocks.module.css';
import FlipCard from '../../components/FlipCard/FlipCard';

class MemorySocks extends Component {
    render() {
        return (
            <div className={styles.container}>
                <FlipCard
                    front='Front'
                    back='Back'
                />
            </div>
        );
    }
}
export default MemorySocks;
