import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';
import "./style.css";

export default function BasicTextFields() {

  return (
      <div>
        <form>
            <div >
              <TextField className="text-fild"
                id="outlined-basic"
                label="Descrição"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField className="text-fild"
                id="outlined-basic"
                label="Quantidade"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField className="text-fild"
                placeholder="R$"
                id="outlined-basic"
                label="Valor"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField className="text-fild"
                id="outlined-basic"
                label="Quantidade Estoque"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
            <Button variant="outlined" fullWidth size="large" color="primary">Salvar</Button>
            </div>
        </form>
      </div>
  );
}