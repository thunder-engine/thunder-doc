.. _doc_vfx_modules:

Creating Custom Modules
=======================

Introduction
------------

The VFX editor allows users to create custom modules that extend the editor's functionality by adding new types of particle modifiers, effects, and behaviors. Custom modules enable developers to create specialized visual effects tailored to the specific needs of the game.

This guide outlines the steps required to create, implement, and integrate custom modules into the VFX editor.

Creating a Custom Module Using XML
----------------------------------

To create a custom module in the VFX editor, XML code is used to describe the behavior, parameters, and operations of the module. Below is an example of creating a module that initializes particles and sets their parameters (lifetime, position, color, rotation, and size).

XML Example for Creating a Custom Module:

.. code-block:: xml

    <module name="Spawn/SampleModule" stage="update">
        <options name="parameterMode">
            <option value="Constant"/>
            <option value="Random"/>
        </options>
        <params>
            <param name="lifetime" type="float" default="0" mode="parameterMode"/>
        </params>
        <operations>
            <operation code="set" result="p.lifetime" arg0="lifetime"/>
        </operations>
    </module>

Breakdown of the XML Structure:

- **module**: This element specifies the name of the module, its type (e.g., "Spawn/SampleModule"), and the stage at which the module is applied (e.g., "spawn", "update", or "render").
- **options**: Each module can contain different modes (e.g., "parameterMode") that determine how the module parameters are applied (e.g., constant or random value).
- **params**: The parameters used to configure particle modifiers. Each parameter has a name, type, and mode (e.g., "lifetime").
- **operations**: The operations performed on the parameters to configure the state of particles. For example, the "set" operation sets the value of a particle's parameter (e.g., "p.lifetime").

An interface to work with this module will be automatically generated in the editor, allowing users to modify the module's parameters through the parameters panel.

Available Operations
--------------------

The VFX editor supports the following operations for manipulating particle parameters:

- **Set**: This operation sets the value of a parameter. For example, you can set the lifetime or position of a particle.
  
  Example:
  
  .. code-block:: xml

    <operation code="set" result="p.lifetime" arg0="lifetime"/>

- **Add**: This operation performs addition on two values. It takes two input parameters and returns their sum.

  Example:
  
  .. code-block:: xml

      <operation code="add" result="p.position" arg0="p.position" arg1="0, 1, 0"/>

- **Subtract**: This operation subtracts the second parameter from the first. It takes two input parameters and returns their difference.

  Example:
  
  .. code-block:: xml

    <operation code="sub" result="p.position" arg0="p.position" arg1="vec3"/>

- **Multiply**: This operation multiplies two parameters. It takes two input parameters and returns their product.

  Example:
  
  .. code-block:: xml

      <operation code="mul" result="p.size" arg0="p.size" arg1="e.deltaTime"/>

- **Divide**: This operation divides the first parameter by the second. It takes two input parameters and returns their quotient.

  Example:
  
  .. code-block:: xml

      <operation code="div" result="p.size" arg0="p.size" arg1="2"/>

Parameter Spaces
----------------

Parameters used in custom modules can belong to different spaces. A space defines where and how the parameter values will be used. Here is a description of the available spaces:

- **Emitter**: Parameters belonging to this space relate to the particle emitter itself. These parameters typically describe properties that affect all particles emitted by the emitter, such as emission speed or general effect settings. These parameters have the prefix "e."

  Example:
  
  .. code-block:: xml

      <operation code="multiply" result="p.size" arg0="p.size" arg1="e.deltaTime"/>

- **Particle**: Parameters in this space relate to individual particles. They control aspects such as size, color, position, and other properties that may change over time for each particle. These parameters have the prefix "p."

  Example:
  
  .. code-block:: xml
  
      <operation code="add" result="p.position" arg0="p.position" arg1="0, 1, 0"/>

- **Renderable**: Parameters in this space relate to objects that can be rendered in the game. These parameters have the prefix "r." Typically, these parameters are only used in modules related to the "render" stage.

  Example:
  
  .. code-block:: xml

      <operation code="set" result="r.size" arg0="p.size.xy"/>

- **Local**: Parameters in this space can change relative to the particle or emitter's local position. They are used as temporary storage for intermediate calculations for subsequent operations. These parameters have no prefix and simply indicate the type of stored data.

  Example:
  
  .. code-block:: xml

      <operation code="mul" result="vec3" arg0="p.velocity" arg1="e.deltaTime"/>
      <operation code="add" result="p.position" arg0="p.position" arg1="vec3"/>

Integrating a Custom Module into the Editor
-------------------------------------------

To integrate a custom module into the editor, simply place the module in the **Content Browser**. Upon the next startup, the editor will automatically register it for use.

Conclusion
----------

Creating custom modules using XML allows you to extend the functionality of the VFX editor, creating unique visual effects for your game. By following the steps outlined, you can integrate new modules into the editor, configure their parameters, and optimize visual effects for specific tasks.
