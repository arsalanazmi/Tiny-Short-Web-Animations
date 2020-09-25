import React from "react";
import Typewriter from "typewriter-effect";
import cx from "classnames";
import {
  makeStyles,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";

import {
  Bridge,
  Build,
  Community,
  Confirm_Transactions,
  Fees,
  Interoperability,
  Masternodes,
  Sale,
  Security,
  Tokens,
  Transaction,
  Maintain_Security,
  Partnerships,
} from "../Images";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "5% 0",
      width: "100%",
    },
    lineOrange: {
      width: "7%",
      height: "3px",
      backgroundColor: "#ed7f09",
      borderColor: "#ce0606",
      borderRadius: "100%",
    },
    lineBlue: {
      width: "7%",
      height: "3px",
      backgroundColor: "#0a7ea8",
      borderColor: "#03547c",
      borderRadius: "100%",
      marginTop: "7%",
    },
    header: {
      width: "80%",
      textAlign: "center",
      margin: "0 auto",
      marginBottom: "8%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "33px",
        width: "97%",
      },
    },
    typist: {
      width: "60%",
      textAlign: "center",
      margin: "0 auto",
      [theme.breakpoints.down("xs")]: {
        width: "87%",
      },
    },
    buttons: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
    },
    button: {
      margin: "5px",
      borderRadius: "50px",
      border: "2px solid #03547c",
      padding: "13px 55px",
      color: "white",
      boxShadow: "2px 4px 5px 2px #a9b9bc",
      "&:hover": {
        backgroundColor: "#316989",
        transition: "300ms ease-in-out",
      },
      "&:focus": {
        outline: "none",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        margin: "1%",
      },
    },
    newsButton: {
      background: "linear-gradient(250deg,#2078aa,#94b9d1)",
      margin: "0 5px",
      borderRadius: "50px",
      border: "2px solid #03547c",
      padding: "13px 55px",
      color: "white",
      boxShadow: "2px 4px 5px 2px #a9b9bc",
      "&:hover": {
        background: "linear-gradient(250deg,#94b9d1,#2078aa)",
        transition: "8000ms ease-in-out",
      },
      "&:focus": {
        outline: "none",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        margin: "1%",
      },
    },
    heading: {
      textAlign: "center",
      marginBottom: "4%",
    },
    heading1: {
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: "34px",
      },
    },
    heading2: {
      fontWeight: "bold",
    },
    container1: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: "5%",
    },
    container1_content: {
      padding: "5% 7%",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down(600)]: {
        padding: "0% 7%",
      },
    },
    container1_img: {
      width: "30%",
      height: "30%",
    },
    container1_lineBlue: {
      width: "7%",
      height: "3px",
      backgroundColor: "#0a7ea8",
      borderColor: "#03547c",
      borderRadius: "100%",
      margin: "5% 0%",
      [theme.breakpoints.down("sm")]: {
        margin: "5% auto",
      },
    },
    container1_lineOrange: {
      width: "7%",
      height: "3px",
      backgroundColor: "#ed7f09",
      borderColor: "#ce0606",
      borderRadius: "100%",
      margin: "5% 0%",
      [theme.breakpoints.down("sm")]: {
        margin: "5% auto",
      },
    },
    container1_para: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
    },
    container2_1: {
      display: "flex",
      flexWrap: "wrap",
    },
    container2_2: {
      display: "flex",
      flexWrap: "wrap-reverse",
    },
    container2_content: {
      padding: "0 2%",
    },
    container2_lineBlue: {
      width: "7%",
      height: "3px",
      backgroundColor: "#0a7ea8",
      borderColor: "#03547c",
      borderRadius: "100%",
      margin: "5% 0%",
      [theme.breakpoints.down(600)]: {
        margin: "5% auto",
      },
    },
    container2_lineOrange: {
      width: "7%",
      height: "3px",
      backgroundColor: "#ed7f09",
      borderColor: "#ce0606",
      borderRadius: "100%",
      margin: "5% 0%",
      [theme.breakpoints.down(600)]: {
        margin: "5% auto",
      },
    },
    container2_heading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        paddingBottom: "5%",
      },
      [theme.breakpoints.down(600)]: {
        textAlign: "center",
      },
    },
    container2_para: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
        paddingBottom: "3%",
      },
    },
    container2_img: {
      width: "85%",
      height: "85%",
      [theme.breakpoints.down("sm")]: {
        display: "block",
        margin: "0 auto",
      },
    },
    container2_button: {
      margin: "5px",
      borderRadius: "50px",
      border: "2px solid #03547c",
      padding: "10px 25px",
      color: "white",
      boxShadow: "2px 4px 5px 2px #a9b9bc",
      "&:hover": {
        backgroundColor: "#316989",
        transition: "300ms ease-in-out",
      },
      "&:focus": {
        outline: "none",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
        margin: "0 auto",
        marginBottom: "10%",
      },
    },
    container2_buttonContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    container2_button1: {
      [theme.breakpoints.between(600, 701)]: {
        padding: "10px 10px",
      },
    },
    container2_button2: {
      [theme.breakpoints.between(600, 701)]: {
        padding: "10px 10px",
      },
      [theme.breakpoints.down("sm")]: {
        background: "linear-gradient(250deg,#2078aa,#94b9d1)",
        transition: "8000ms ease-in-out",
        "&:hover": {
          background: "linear-gradient(250deg,#94b9d1,#2078aa)",
        },
      },
    },
    container3: {
      width: "60%",
      textAlign: "center",
      margin: "0 auto",
      marginBottom: "5%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        marginTop: "8%",
      },
    },
    container3_heading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "33px",
        marginTop: "-3%",
      },
    },
    container3_para: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
    },
    container3_content: {
      padding: "5% 0",
    },
    container3_button: {
      [theme.breakpoints.down("sm")]: {
        padding: "8px",
        width: "30%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "60%",
      },
    },
  })
);

const Body = () => {
  const classes = useStyles();
  
  const { ref: build } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0%)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 6000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: sale } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: token } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: bridge } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: masternodes } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0%)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: transaction } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: security } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: partnerships } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  const { ref: community } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(5%)" },
    ],
    timing: {
      delay: 2000,
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <hr className={classes.lineOrange} />
        <Grid style={{ margin: "2%" }} item sm={12} md={12}>
          <Typography
            data-aos="flip-up"
            variant="h3"
            className={classes.header}
            gutterBottom
          >
            The blockchain platform for real money, assets, and blazing-fast
            token payments that scale.
          </Typography>

          <Typography variant="h6" className={classes.typist} gutterBottom>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: -200,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Syscoin Platform provides trustless interoperability with Ethereum ERC-20, token & asset microtransactions, and Bitcoin-core-compliant merge-mined security."
                  )
                  .pauseFor(3500)
                  .deleteAll(-200)
                  .pauseFor(500)
                  .start();
              }}
            />
          </Typography>

          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              Support
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              Wallet
            </Button>
            <Button className={classes.newsButton} variant="contained">
              News
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              White Papers
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              Roadmap
            </Button>
          </div>
          <hr className={classes.lineBlue} />
        </Grid>

        <Grid data-aos="zoom-in-down" item xs={12} sm={12} md={12}>
          <div className={classes.heading}>
            <Typography
              className={classes.heading1}
              variant="h3"
              gutterBottom
            >
              Syscoin Platform
            </Typography>
            <Typography
              className={classes.heading2}
              variant="h5"
              gutterBottom
            >
              Key Features
            </Typography>
          </div>
        </Grid>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className={classes.container1}
        >
          <Grid
            className={classes.container1_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Transaction}
              className={classes.container1_img}
              alt="High Transaction Throughput"
            />
            <hr className={classes.container1_lineBlue} />
            <Typography variant="h5" gutterBottom>
              High Transaction Throughput
            </Typography>
            <Typography
              variant="h6"
              className={classes.container1_para}
              gutterBottom
            >
              Syscoin's unique Z-DAG technology means the network can handle a
              transaction throughput of 60158 Syscoin Platform Token
              transactions per second (TPS), while remaining decentralised and
              secure.
            </Typography>
          </Grid>
          <Grid
            className={classes.container1_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Interoperability}
              className={classes.container1_img}
              alt="Interoperability"
            />
            <hr className={classes.container1_lineOrange} />
            <Typography variant="h5" gutterBottom>
              Interoperability
            </Typography>
            <Typography
              variant="h6"
              className={classes.container1_para}
              gutterBottom
            >
              Build bridges between blockchains with Syscoin Bridge,
              interoperability with other chains has never been easier.
            </Typography>
          </Grid>
          <Grid
            className={classes.container1_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Security}
              className={classes.container1_img}
              alt="High Security"
            />
            <hr className={classes.container1_lineBlue} />
            <Typography variant="h5" gutterBottom>
              High Security
            </Typography>
            <Typography
              variant="h6"
              className={classes.container1_para}
              gutterBottom
            >
              Syscoin is merge-mined with Bitcoin which provides Syscoin with an
              incredibly robust and secure network.
            </Typography>
          </Grid>
          <Grid
            className={classes.container1_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img src={Fees} className={classes.container1_img} alt="Low Fees" />
            <hr className={classes.container1_lineOrange} />
            <Typography variant="h5" gutterBottom>
              Low Fees
            </Typography>
            <Typography
              variant="h6"
              className={classes.container1_para}
              gutterBottom
            >
              The fees to transact Syscoin Platform Tokens or Assets are very
              low, making them suited for a wide range of use cases such as
              point-of-sale transactions.
            </Typography>
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{ marginBottom: "-7%" }}
          className={classes.container2_1}
        >
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineBlue} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              What Can You Build?
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              The possibilities of what you can build on the Syscoin platform
              are limited only by your imagination. Here are a some use cases to
              get your wheels turning:
            </Typography>
          </Grid>
          <Grid
            ref={build}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img src={Build} className={classes.container2_img} alt="Build" />
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_1}
        >
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineBlue} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Point Of Sale
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              The Syscoin protocol facilitates real-world point-of-sale
              applications that can be used to transact in-store or via
              e-commerce. The high speed, quick resolution of asset transactions
              via Syscoin’s proprietary Z-DAG technology means you can empower
              your business with the speed and security of blockchain.
              <br />
              Some examples of retail use cases include:
              <br />
              <ol>
                <li>De-Centralised Marketplaces and E-Commerce</li>
                <li>Game Assets and Microtransactions</li>
                <li>Certificate Backed Digital Goods</li>
                <li>Stock Management and Tracking</li>
              </ol>
            </Typography>
          </Grid>
          <Grid
            ref={sale}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img src={Sale} className={classes.container2_img} alt="Build" />
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_2}
        >
          <Grid
            ref={token}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img src={Tokens} className={classes.container2_img} alt="Build" />
          </Grid>
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineOrange} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Create Crypto Tokens
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Syscoin Platform Tokens (SPT) allow anyone to quickly create their
              own cryptocurrency token on Syscoin Platform. An example of an SPT
              is LODE, a new cryptographic money system backed by physical
              silver. Other use cases include loyalty points, coins supported by
              physical assets, and service-backed currency.
            </Typography>
            <Button
              className={classes.container2_button}
              variant="outlined"
              color="primary"
            >
              Learn More
            </Button>
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_1}
        >
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineBlue} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Syscoin Bridge
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Syscoin 4.0 introduces a first-of-its-kind, two-way bridge to
              Ethereum. This allows Ethereum developers to move ERC20 tokens
              back and forth between the Ethereum network and Syscoin Platfom,
              where they can make use of the scalability and
              high-transaction-throughput that Syscoin offers. This is done
              using a unique, permissionless burn/mint process that moves a
              quantity of ERC20 tokens into a corresponding Syscoin Platform
              Token (SPT), which the user has created. The bridge makes it
              possible to maintain a presence on both the Syscoin network and
              Ethereum network. <br />
              <br />
              Conversely, Syscoin developers can move an SPT into a
              user-generated ERC20 paired equivalent token, where they can
              harness powerful Ethereum features such as Smart Contracts.
              Ultimately, developers will be able to create bridges to other
              blockchains as required, offering optimum versatility,
              forward-compatibility, diversity and interoperability across the
              cryptosphere.
            </Typography>
            <div className={classes.container2_buttonContainer}>
              <Button
                className={cx(
                  classes.container2_button,
                  classes.container2_button1
                )}
                variant="outlined"
                color="primary"
              >
                Learn More
              </Button>
              <Button
                className={cx(
                  classes.container2_button,
                  classes.container2_button2
                )}
                variant="outlined"
                color="primary"
              >
                Walk the bridge
              </Button>
            </div>
          </Grid>
          <Grid
            ref={bridge}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img src={Bridge} className={classes.container2_img} alt="Build" />
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_2}
        >
          <Grid
            ref={masternodes}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Masternodes}
              className={classes.container2_img}
              alt="Build"
            />
          </Grid>
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineOrange} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Masternodes
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Syscoin Masternodes were launched and implemented along with
              Syscoin 3.0 on May 1st 2018. Based on Dash code, Syscoin enhanced
              the masternodes to offer high transactional throughput using
              Z-DAG, governance issuance and seniority.
            </Typography>
            <Button
              className={classes.container2_button}
              variant="outlined"
              color="primary"
            >
              Learn More
            </Button>
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{ marginBottom: "-10%" }}
          className={classes.container2_1}
        >
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineBlue} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Zero Confirmation Transactions
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Transferring funds or ownership of a token uses the Z-DAG
              protocol, giving near real-time transactions, which makes them the
              perfect choice for a retail environment.
            </Typography>
            <Button
              className={classes.container2_button}
              variant="outlined"
              color="primary"
            >
              Learn More
            </Button>
          </Grid>
          <Grid
            ref={transaction}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Confirm_Transactions}
              className={classes.container2_img}
              alt="Build"
            />
          </Grid>
        </div>

        <Grid
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={classes.container3}
          item
          xs={12}
          sm={12}
          md={12}
        >
          <hr className={classes.lineOrange} />
          <div className={classes.container3_content}>
            <Typography
              className={classes.container3_heading}
              variant="h3"
              gutterBottom
            >
              Scale as Your Business Grows
            </Typography>
            <Typography
              className={classes.container3_para}
              variant="h6"
              gutterBottom
            >
              Syscoin Assets have one of the highest transactions-per-second
              rates (TPS) in the blockchain space, so your application can scale
              up as your business grows. Using Z-DAG and the Syscoin masternode
              network the current TPS rate for Syscoin Assets, Offers and
              Certificates has been independently verified at 60158 TPS – giving
              the Syscoin Platform a significant advantage over other blockchain
              protocols.
            </Typography>
          </div>
          <Button
            className={cx(classes.newsButton, classes.container3_button)}
            variant="outlined"
            color="primary"
          >
            Test results
          </Button>
        </Grid>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_2}
        >
          <Grid
            ref={security}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Maintain_Security}
              className={classes.container2_img}
              alt="Security"
            />
          </Grid>
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineOrange} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Maintain Security
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Syscoin is merge-mined with Bitcoin meaning Bitcoin miners can
              simultaneously mine Bitcoin and Syscoin with no increase in cost.
              This provides Syscoin with an incredibly robust and secure network
              and reduces network vulnerabilities that might allow exploits such
              as a 51% attack.
            </Typography>
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_2}
        >
          <Grid
            ref={partnerships}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Partnerships}
              className={classes.container2_img}
              alt="Partnerships"
            />
          </Grid>
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineBlue} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Partnerships
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Over the past four years, Syscoin and Blockchain Foundry have
              established significant and strategic relationships with many
              third-party organisations. Click a logo for more information.
            </Typography>
          </Grid>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={classes.container2_2}
        >
          <Grid
            ref={community}
            className={classes.container2Img}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              src={Community}
              className={classes.container2_img}
              alt="Community"
            />
          </Grid>
          <Grid
            className={classes.container2_content}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <hr className={classes.container2_lineBlue} />
            <Typography
              className={classes.container2_heading}
              variant="h3"
              gutterBottom
            >
              Community
            </Typography>
            <Typography
              className={classes.container2_para}
              variant="h6"
              gutterBottom
            >
              Together with the Syscoin team and foundation, our community is
              the driving force behind Syscoin's success. Growing steadily since
              2014 our social media forums are a hotbed for developers,
              enthusiasts, and investors alike where we discuss ideas and help
              the Syscoin core team forge the way ahead.
              <br />
              <br />
              We have a strong talent pool of community developers who have
              created some excellent online tools and services for the Syscoin
              community: <br />
              <br />
              Community members/developers can submit funding proposals to help
              complete their projects using a portion of the monthly governance
              pool. Applications are voted on by masternode holders.
            </Typography>
            <div className={classes.container2_buttonContainer}>
              <Button
                className={cx(
                  classes.container2_button,
                  classes.container2_button2
                )}
                variant="outlined"
                color="primary"
              >
                Join Discord
              </Button>
              <Button
                className={cx(
                  classes.container2_button,
                  classes.container2_button1
                )}
                variant="outlined"
                color="primary"
              >
                Tools and Services
              </Button>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Body;