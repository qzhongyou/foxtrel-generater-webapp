foxtrel.config.set('vendorVersion', '@1.0');
foxtrel.config.set('vendor', ['react']);

//根据项目类型,选择不同编译器进行编译
foxtrel.config.set('type', 'react');
foxtrel.config.set('name', 'projectName');
foxtrel.config.set('outputPath', __dirname + "/output/views");

foxtrel.config.set('ServerOutputPath', __dirname + "/output/");
foxtrel.config.set('ServerEntryPath', [__dirname + '/app/!(view)/**.js',__dirname+'/app/config.js']);
