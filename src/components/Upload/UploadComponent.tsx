import React, { Component } from 'react';

export class UploadComponent extends Component<{}, { path: string }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { path: 'выберите csv файл' };
        this.setPath = this.setPath.bind(this);
    }

    setPath(path: string) {
        this.setState({ path });
    }

    render() {
        const path = this.state.path;
        return (
            <div>
                <h3>Upload</h3>
                <input type="text" value={this.state.path}></input>
                <button onClick={this.setPath}></button>
            </div>
        );
    }
}

export default UploadComponent;
