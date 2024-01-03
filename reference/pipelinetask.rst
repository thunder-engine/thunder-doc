.. _api_PipelineTask:

PipelineTask Class
==================

Inherited: :doc:`Object<api_Object>`

.. _api_PipelineTask_description:

Description
-----------

All render tasks must be inherited from this class.



.. _api_PipelineTask_public:

Public Methods
--------------

+--------------------------------+-----------------------------------------------------------------------------------------+
|                           void | :ref:`exec<api_PipelineTask_exec>` (PipelineContext & context)                          |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                            int | :ref:`inputCount<api_PipelineTask_inputCount>` () const                                 |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                    std::string | :ref:`inputName<api_PipelineTask_inputName>` (int  index) const                         |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                           bool | :ref:`isEnabled<api_PipelineTask_isEnabled>` () const                                   |
+--------------------------------+-----------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`output<api_PipelineTask_output>` (int  index)                                     |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                            int | :ref:`outputCount<api_PipelineTask_outputCount>` () const                               |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                    std::string | :ref:`outputName<api_PipelineTask_outputName>` (int  index) const                       |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                           void | :ref:`resize<api_PipelineTask_resize>` (int  width, int  height)                        |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                           void | :ref:`setEnabled<api_PipelineTask_setEnabled>` (bool  enable)                           |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                           void | :ref:`setInput<api_PipelineTask_setInput>` (int  index, Texture * source)               |
+--------------------------------+-----------------------------------------------------------------------------------------+
|                           void | :ref:`setSettings<api_PipelineTask_setSettings>` (const PostProcessSettings & settings) |
+--------------------------------+-----------------------------------------------------------------------------------------+



.. _api_PipelineTask_static:

Static Methods
--------------

None

.. _api_PipelineTask_methods:

Methods Description
-------------------

.. _api_PipelineTask_exec:

 void **PipelineTask::exec** (:ref:`PipelineContext<api_PipelineContext>` & *context*)

The task will be executed for the provided *context*.

----

.. _api_PipelineTask_inputCount:

 int **PipelineTask::inputCount** () const

Return the number of inputs.

----

.. _api_PipelineTask_inputName:

 std::string **PipelineTask::inputName** (int  *index*) const

Returns by *index* a name of input.

----

.. _api_PipelineTask_isEnabled:

 bool **PipelineTask::isEnabled** () const

Returns true if task is enabled; otherwise returns false.

----

.. _api_PipelineTask_output:

 :ref:`Texture<api_Texture>`* **PipelineTask::output** (int  *index*)

Returns by *index* a result of task as a render texture.

----

.. _api_PipelineTask_outputCount:

 int **PipelineTask::outputCount** () const

Return the number of outputs.

----

.. _api_PipelineTask_outputName:

 std::string **PipelineTask::outputName** (int  *index*) const

Returns by *index* a name of output.

----

.. _api_PipelineTask_resize:

 void **PipelineTask::resize** (int  *width*, int  *height*)

A callback to react on screen *width* and *height* changed.

----

.. _api_PipelineTask_setEnabled:

 void **PipelineTask::setEnabled** (bool  *enable*)

Sets task to *enable* or disable. The disabled effect will not be executed.

**See also** isEnabled().

----

.. _api_PipelineTask_setInput:

 void **PipelineTask::setInput** (int  *index*, :ref:`Texture<api_Texture>` * *source*)

Set a *source* texture with given *index* to use it in the render task.

----

.. _api_PipelineTask_setSettings:

 void **PipelineTask::setSettings** (:ref:`PostProcessSettings<api_PostProcessSettings>` & *settings*)

A callback to react on chage of *settings*.


