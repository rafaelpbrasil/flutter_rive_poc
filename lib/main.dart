import 'dart:io';

import 'package:flutter/material.dart';

import './other_state_machine_example.dart';
import './simple_example.dart';
import './state_machine_example.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.deepPurple,
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Rive presentation'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SimpleButton(
              text: 'Simple animation',
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const SimpleExample(),
                  ),
                );
              },
            ),
            SimpleButton(
              text: 'Interactive animation',
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const StateMachineExample(),
                  ),
                );
              },
            ),
            SimpleButton(
              text: 'Other interactive animation',
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const OtherStateMachineExample(),
                  ),
                );
              },
            ),
            const SimpleButton(
              text: 'Something else',
              onPressed: launchApp,
            ),
          ],
        ),
      ),
    );
  }
}

class SimpleButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;

  const SimpleButton({
    super.key,
    required this.text,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: TextButton(
        style: ButtonStyle(
          padding: MaterialStateProperty.all<EdgeInsets>(
            const EdgeInsets.all(10),
          ),
        ),
        onPressed: onPressed,
        child: Text(text),
      ),
    );
  }
}

void launchApp() async {
  // replace with your project directory path
  const appPath = '/Users/user/Projects/rive_demo/Joel.app';
  final result = await Process.run('open', [appPath]);

  if (result.exitCode == 0) print('Successfully launched the app.');
}