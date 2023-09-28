import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class OtherStateMachineExample extends StatefulWidget {
  const OtherStateMachineExample({super.key});

  @override
  State<OtherStateMachineExample> createState() =>
      _OtherStateMachineExampleState();
}

class _OtherStateMachineExampleState extends State<OtherStateMachineExample> {
  void _onInit(Artboard artboard) {
    final controller = StateMachineController.fromArtboard(
      artboard,
      'State Machine BTN',
    );
    artboard.addController(controller!);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: GestureDetector(
          // onTap: _hitBump,
          child: RiveAnimation.asset(
            'assets/video_slot_spin_button_test.riv',
            onInit: _onInit,
          ),
        ),
      ),
    );
  }
}
