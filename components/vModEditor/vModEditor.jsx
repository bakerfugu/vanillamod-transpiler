import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// need to replace these icons with bootstrap ones
// import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Editor from "@monaco-editor/react";

import { transpileCode, downloadDatapack } from "./transpilerHandler";

// const useStyles = makeStyles({
//   fatButton: {
//     marginLeft: "5px",
//     marginRight: "5px",
//     borderRadius: "0.5em",
//   },
//   fatButtonText: {
//     fontWeight: "bold",
//   },
//   editorTitle: {
//     paddingLeft: "20px",
//     fontWeight: "bold",
//   },
//   editorHeader: {
//     height: "5em",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// });

function displayErrors(errorMarkers, editor, monacoAlive) {
  if (errorMarkers.length < 1) {
    // something funky happened, we got an error but didn't handle it smoothly
    // usually means vMod library has a bug
  } else {
    monacoAlive.editor.setModelMarkers(
      editor.getModel(),
      "vanillamod",
      errorMarkers
    );
    setTimeout(() => {
      const firstError = errorMarkers[0];
      editor.setPosition({
        lineNumber: firstError.startLineNumber,
        column: firstError.startColumn,
      });
      editor.getAction("editor.action.showHover").run();
      const actionContainer = document.getElementsByClassName(
        "action-container"
      );
      if (actionContainer.length > 0) actionContainer[0].click();
    }, 100);
  }

  // display red X thingy saying errors were found
}

function VModEditor({ title, startingCode, isDarkTheme }) {
  // these states are not in use right now
  const [errorInfo, setErrorInfo] = useState(null);
  const [clearErrorInfo, setClearErrorInfo] = useState(null);
  // const monaco = useMonaco();
  // const editorRef = useRef();

  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do stuff before editor is mounted
    // like removing DOM library and adding
    // vmod constants for intellisense
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;
  }

  function showErrorInfo(errorMarkers) {
    const errorCount = errorMarkers ? errorMarkers.length : 0;
    // still need to figure out what to do when error markers
    // exists, but is not zero (which is a vMod "crash")
    // see top part of displayErrors(...)
    setErrorInfo(<ErrorInfo errorCount={errorCount} />);
    if (clearErrorInfo) clearTimeout(clearErrorInfo);
    const newClear = setTimeout(() => {
      setErrorInfo(null);
    }, 8000);
    setClearErrorInfo(newClear);
  }

  function checkButtonClicked() {
    const modInfo = {
      modName: title,
    };
    const code = editorRef.current.getValue();
    const { errorMarkers } = transpileCode(
      code,
      modInfo,
      editorRef.current,
      monacoRef.current
    );
    if (errorMarkers) {
      displayErrors(errorMarkers, editorRef.current, monacoRef.current);
    }

    showErrorInfo(errorMarkers);
  }

  function downloadButtonClicked() {
    const modInfo = {
      modName: title,
    };
    const code = editorRef.current.getValue();
    const { datapack, errorMarkers } = transpileCode(
      code,
      modInfo,
      editorRef.current,
      monacoRef.current
    );
    if (errorMarkers) {
      displayErrors(errorMarkers, editorRef.current, monacoRef.current);
      showErrorInfo(errorMarkers);
    } else {
      downloadDatapack(datapack);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="py-2">{title}</h1>
        </Col>
        <Col md="auto" className="d-flex py-3">
          {/* 
          // eventually fix this error popover
          {errorInfo} 
          */}
          <Button
            variant="secondary"
            size="lg"
            className="mx-1"
            onClick={checkButtonClicked}
          >
            Check
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="mx-1"
            onClick={downloadButtonClicked}
          >
            Download
          </Button>
        </Col>
      </Row>
      

      <Row>
        <Editor
          height="85vh"
          language="javascript"
          theme={isDarkTheme ? "vs-dark" : "light"}
          options={{ fontSize: 15, minimap: { enabled: false } }}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          value={startingCode}
        />
      </Row>
    </Container>
  );
}

VModEditor.propTypes = {
  startingCode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDarkTheme: PropTypes.bool,
};

VModEditor.defaultProps = {
  isDarkTheme: false,
};

function ErrorInfo({ errorCount }) {
  // expand this eventually to have a modal button that displays
  // a list of all the errors
  return null;

  // figure this out later
  // https://react-bootstrap.github.io/components/overlays/
  // return (
  //   <Container>
  //     {errorCount ? (
  //       <ErrorOutlineIcon color="error" />
  //     ) : (
  //       <CheckCircleOutlineIcon color="secondary" />
  //     )}
  //     <p className={errorCount ? "text-danger" : "text-secondary"}>
  //       {errorCount
  //         ? `${errorCount} Error${errorCount > 1 ? "s" : ""}`
  //         : "No Errors!"}
  //     </p>
  //   </Container>
  // );
}

ErrorInfo.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default VModEditor;