import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

export default class SignUpModal extends Component {

    state = {
        open: true,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
            >
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Nome"
                        helperText="Preencha com o nome"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Celular"
                        helperText="Preencha com o celular"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </Modal>
        );
    }
}