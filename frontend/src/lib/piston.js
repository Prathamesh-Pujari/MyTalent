export async function executeCode(language, code) {
  try {
    // Only support JavaScript for now
    if (language !== "javascript") {
      return {
        success: false,
        error: "Only JavaScript is supported right now",
      };
    }

    const logs = [];

    // Save original console.log
    const originalLog = console.log;

    // Capture console.log output
    console.log = (...args) => {
      logs.push(
        args
          .map((arg) =>
            typeof arg === "object"
              ? JSON.stringify(arg)
              : String(arg)
          )
          .join(" ")
      );
    };

    // Execute user code
    eval(code);

    // Restore console.log
    console.log = originalLog;

    return {
      success: true,
      output: logs.join("\n") || "No Output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}