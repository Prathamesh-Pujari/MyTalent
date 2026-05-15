export const executeCode = async (language, code) => {
  try {
    const logs = [];

    const originalLog = console.log;

    console.log = (...args) => {
      logs.push(args.join(" "));
    };

    eval(code);

    console.log = originalLog;

    return {
      success: true,
      output: logs.join("\n"),
    };
  } catch (error) {
    return {
      success: false,
      output: error.message,
    };
  }
};