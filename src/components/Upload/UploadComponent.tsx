import React, { Component, RefObject, useState } from 'react';
import { Stack, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './UploadComponent.scss';

/**
 * https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
export class UploadComponent extends Component<unknown, { path: string; isPathValid: boolean }> {
    private readonly inputOpenFileRef: RefObject<HTMLInputElement>;
    // public [validated, setValidated] = useState(false);

    constructor(props: unknown) {
        super(props);
        this.state = { path: 'выберите csv файл', isPathValid: false };
        this.setPath = this.setPath.bind(this);
        this.inputOpenFileRef = React.createRef();
    }

    setPath(event: any): void {
        this.setState({ ...this.state, path: event?.target?.files[0]?.name || '' });
        console.log('updated', event?.target);
    }

    parseCSV() {
        this.showOpenFileDlg();
        console.log('parsed');
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef?.current?.click();
    };

    handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ ...this.state, isPathValid: true });
    };

    render() {
        return (
            <div className="app-upload">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs sm md lg xl xxl={4}>
                            <Stack gap={3}>
                                <h3>Upload</h3>
                                <input
                                    ref={this.inputOpenFileRef}
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={this.setPath}
                                />
                                <label htmlFor="id_path">{this.state.path}</label>
                                <input id="id_path" type="text" value={this.state.path} onChange={this.setPath}></input>
                                <button onClick={this.showOpenFileDlg}>Parse</button>

                                <h3>Upload</h3>
                                <Form noValidate validated={this.state.isPathValid} onSubmit={this.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formPath">
                                        <Form.Label htmlFor="formPath">File name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter path"
                                            value={this.state.path}
                                            onChange={this.setPath}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" className="mr-1" onClick={this.showOpenFileDlg}>
                                        Parse
                                    </Button>
                                </Form>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default UploadComponent;
