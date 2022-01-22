import React, { Component, RefObject } from 'react';
import './UploadComponent.scss';

/**
 * https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
export class UploadComponent extends Component<unknown, { path: string }> {
    private readonly inputOpenFileRef: RefObject<HTMLInputElement>;

    constructor(props: unknown) {
        super(props);
        this.state = { path: 'выберите csv файл' };
        this.setPath = this.setPath.bind(this);
        this.inputOpenFileRef = React.createRef();
    }

    setPath(event: any): void {
        this.setState({ path: event?.target?.files[0]?.name || '' });
        console.log('updated', event?.target);
    }

    parseCSV() {
        this.showOpenFileDlg();
        console.log('parsed');
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef?.current?.click();
    };

    render() {
        return (
            <div className="app-upload">
                <h3>Upload</h3>
                <input ref={this.inputOpenFileRef} type="file" style={{ display: 'none' }} onChange={this.setPath} />
                <label htmlFor="id_path">{this.state.path}</label>
                <input id="id_path" type="text" value={this.state.path} onChange={this.setPath}></input>
                <button onClick={this.showOpenFileDlg}>Parse</button>
            </div>
        );
    }
}

export default UploadComponent;
