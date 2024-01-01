.. _doc_graphics_pipeline:

Graphics Pipeline
=================

.. warning::
    Please note that the entire graphics pipeline module is currently in development.
	API changes may occur in future releases, and some features may not be fully functional.
	Exercise caution when relying on this module in production environments.

Thunder Engine employs a flexible graphics pipeline that allows you to fine-tune the balance between quality and performance on an individual project basis.
This flexibility ensures that you can tailor the graphical settings to meet the specific requirements of your project, providing a versatile solution for achieving the desired visual fidelity while maintaining optimal performance.

The graphics pipeline in Thunder Engine is task-based, representing each graphical feature as a task in the pipeline.
This task-oriented approach forms a graph that efficiently processes and renders graphics tasks.
This system allows for a modular and scalable approach to handling graphics tasks, contributing to the engine's adaptability and efficiency in managing complex visual scenarios.

Graphics Pipeline Entities
--------------------------

Thunder Engine's graphics pipeline is composed of key entities that work together to facilitate rendering tasks efficiently.

**PipelineContext:**
The `PipelineContext` serves as the execution environment for tasks related to scene rendering.
It provides the runtime context for rendering tasks, coordinating the flow of information between various stages of the rendering process.

**Pipeline:**
A `Pipeline` in Thunder Engine represents a loadable resource, forming the graphical rendering graph.
Users have the flexibility to customize this graph according to their project requirements.

**PipelineTask:**
Individual atomic units within the graphics pipeline are known as `PipelineTask`.
These tasks form the building blocks of the rendering graph. When executed by the `PipelineContext`, each task processes specific aspects of the rendering process.

Custom Tasks
------------

Developers have the ability to extend and customize Thunder Engine's graphics pipeline by creating their own tasks based on the `PipelineTask` class.
These custom tasks allow for the seamless integration of user-specific rendering functionality, providing a means to enhance or extend the engine's rendering capabilities.

Editor Integration
------------------

Users can edit the graphics pipeline using a dedicated editor, allowing for easy customization of the rendering process.
This integrated editor provides a user-friendly interface for modifying the graphical rendering graph according to the specific needs of the project.

Available PipelineTasks
-----------------------

**AmbientOcclusion:**
Handles the Ambient Occlusion effect in 3D scenes.

**AntiAliasing:**
Manages edge smoothing for enhanced visual quality.

**Bloom:**
Creates a glowing effect for bright objects.

**DeferredLighting:**
Used in conjunction with GBuffer for on-screen lighting calculations.

**GBuffer:**
Renders opaque objects on the scene, preserving essential material parameters for later use in other tasks.

**GuiLayer:**
Responsible for rendering the user interface.

**Reflections:**
Calculates material reflection capabilities for realistic image rendering.

**ShadowMap:**
Forms shadow maps for subsequent use in lighting calculations.

**Translucent:**
Handles the rendering of semi-transparent objects on the scene.
Due to the nature of Deferred Shading, these objects must be drawn after lighting calculations.

Please note that the availability and functionality of these tasks may be subject to change in future releases.
Refer to the corresponding sections in the documentation for detailed information on each `PipelineTask`.
