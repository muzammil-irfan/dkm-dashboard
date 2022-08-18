import React from "react";
import "./TallySheet.css";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';

const TallySheet = () => {
  //   const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   }

  //     const Transition = React.forwardRef(function Transition(props, ref) {
  //       return <Slide direction="up" ref={ref} {...props} />;
  //     });
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-black">Tally Sheet</h1>
      </div>
      <div className="flex my-10 ">
        <label
          for="my-modal-4"
          class="p-5 px-14 rounded-md text-center shadow-md"
        >
          <p>Ticket Number</p>
          <h1 className="text-3xl text-black cursor-pointer font-bold">60</h1>
        </label>
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-lg font-bold">Change Ticket Number</h3>
            <input
              type="email"
              placeholder="Name"
              class="input input-bordered w-96 bg-white mt-5 rounded-full"
            />
            <input
              type="email"
              placeholder="Name"
              class="input input-bordered w-96 bg-white mt-5 rounded-full"
            />
            <input
              type="submit"
              value="Save"
              className="btn text-white w-96 mt-10 rounded-full"
            />
          </label>
        </label>
        <label
          for="my-modal-4"
          class="p-5 px-14 rounded-md cursor-pointer text-center shadow-md"
        >
          <p>DKM Number</p>
          <h1 className="text-3xl text-black font-bold">60</h1>
        </label>
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-lg font-bold">Change DKM Number</h3>
            <input
              type="email"
              placeholder="Name"
              class="input input-bordered w-96 bg-white mt-5 rounded-full"
            />
            <input
              type="email"
              placeholder="Name"
              class="input input-bordered w-96 bg-white mt-5 rounded-full"
            />
            <input
              type="submit"
              value="Save"
              className="btn text-white w-96 mt-10 rounded-full"
            />
          </label>
        </label>

        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button> */}
        {/* <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Change DKM Number"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description flex justify-center">
          <input
                type="email"
                placeholder="Name"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
          <input
                type="email"
                placeholder="Name"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
              <input
                type="submit"
                value="Save"
                className="btn text-white w-96 mt-10 rounded-full"
              />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
        <button onClick={handleClickOpen} className="p-5 mr-5 px-14 rounded-md text-center shadow-md">
          <p>DKM Number</p>
          <h1 className="text-3xl text-black font-bold">60</h1>
        </button>
        <button onClick={handleClickOpen} className="p-5 px-14 rounded-md text-center shadow-md">
          <p>Ticket Number</p>
          <h1 className="text-3xl text-black font-bold">60</h1>
        </button> */}
      </div>
      <div className=" px-5 py-10  shadow-lg bg-slate-50">
        <div class=" tallyGrid text-[10px]">
          <div>
            <p className="">Date</p>
            <p className="">6/5/2022</p>
          </div>
          <div>
            <p className="">Ticket Num</p>
            <p className="">60012</p>
          </div>
          <div>
            <p className="">DKM Num</p>
            <p className="">1234</p>
          </div>
          <div className="mr-1">
            <p className="">Ship To</p>
            <p className="mr-1">DKM Little Rock</p>
          </div>
          <div>
            <p className="">Location</p>
            <p className="">Broadway, TX</p>
          </div>
          <div>
            <p className="">Customer</p>
            <p className="">TXLR</p>
          </div>
          <div>
            <p className="">Customer PO</p>
            <p className="">1550</p>
          </div>
          <div>
            <p className="">Pipe Size</p>
            <p className="">10 3/4</p>
          </div>
          <div>
            <p className="">Total FT</p>
            <p className="">1500</p>
          </div>
          <div>
            <p className="">Status</p>
            <p className="">New</p>
          </div>
          <div>
            <p className="">Truck Num</p>
            <p className="">4</p>
          </div>
          <div>
            <p className="">Trailer Num</p>
            <p className="">3</p>
          </div>
          <div>
            <p className="">Driver</p>
            <p className="">Truck Com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallySheet;
