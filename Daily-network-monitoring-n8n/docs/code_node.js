return items.map(item => {
    return {
      json: {
        api_1_response: item.json["HTTP Request"]?.json ?? {},
        api_2_response: item.json["HTTP Request 1"]?.json ?? {},
        command_result: {
          stdout: item.json["Execute Command"]?.json?.stdout ?? "No output",
          stderr: item.json["Execute Command"]?.json?.stderr ?? "No error",
          exitCode: item.json["Execute Command"]?.json?.exitCode ?? "No code"
        }
      }
    };
  });
  