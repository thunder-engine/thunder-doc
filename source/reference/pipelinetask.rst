.. _api_PipelineTask:

PipelineTask
============

Inherited: :ref:`Object<api_Object>`

.. _api_PipelineTask_description:

Description
-----------

All render tasks must be inherited from this class.



.. _api_PipelineTask_public:

Public Methods
--------------

+--------------------------------+---------------------------------------------------------------------------+
|                           void | :ref:`analyze<api_PipelineTask_04f216c9>` (World * world)                 |
+--------------------------------+---------------------------------------------------------------------------+
|                           void | :ref:`exec<api_PipelineTask_908375ab>` ()                                 |
+--------------------------------+---------------------------------------------------------------------------+
|                            int | :ref:`inputCount<api_PipelineTask_1853927a>` () const                     |
+--------------------------------+---------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`inputName<api_PipelineTask_27df5b41>` (int  index) const            |
+--------------------------------+---------------------------------------------------------------------------+
|                           bool | :ref:`isEnabled<api_PipelineTask_379e10cb>` () const                      |
+--------------------------------+---------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`output<api_PipelineTask_6405e913>` (int  index)                     |
+--------------------------------+---------------------------------------------------------------------------+
|                            int | :ref:`outputCount<api_PipelineTask_8a3deb51>` () const                    |
+--------------------------------+---------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`outputName<api_PipelineTask_b90a1d3c>` (int  index) const           |
+--------------------------------+---------------------------------------------------------------------------+
|                           void | :ref:`resize<api_PipelineTask_a29be786>` (int  width, int  height)        |
+--------------------------------+---------------------------------------------------------------------------+
|                           void | :ref:`setContext<api_PipelineTask_1ce79b38>` (PipelineContext * context)  |
+--------------------------------+---------------------------------------------------------------------------+
|                           void | :ref:`setEnabled<api_PipelineTask_6a2b0f38>` (bool  enable)               |
+--------------------------------+---------------------------------------------------------------------------+
|                           void | :ref:`setInput<api_PipelineTask_6589d3b2>` (int  index, Texture * source) |
+--------------------------------+---------------------------------------------------------------------------+



.. _api_PipelineTask_static:

Static Methods
--------------

None

.. _api_PipelineTask_methods:

Methods Description
-------------------

.. _api_PipelineTask_04f216c9:

 void **PipelineTask::analyze** (:ref:`World<api_World>` * *world*)

This method can be used to analyze a scene graphs for the provided world.

----

.. _api_PipelineTask_908375ab:

 void **PipelineTask::exec** ()

Executes the rendering commands associated with this pipeline task.

----

.. _api_PipelineTask_1853927a:

 int **PipelineTask::inputCount** () const

Return the number of inputs.

----

.. _api_PipelineTask_27df5b41:

 :ref:`TString<api_TString>`  **PipelineTask::inputName** (int  *index*) const

Returns by *index* a name of input.

----

.. _api_PipelineTask_379e10cb:

 bool **PipelineTask::isEnabled** () const

Returns true if task is enabled; otherwise returns false.

----

.. _api_PipelineTask_6405e913:

 :ref:`Texture<api_Texture>` * **PipelineTask::output** (int  *index*)

Returns by *index* a result of task as a render texture.

----

.. _api_PipelineTask_8a3deb51:

 int **PipelineTask::outputCount** () const

Return the number of outputs.

----

.. _api_PipelineTask_b90a1d3c:

 :ref:`TString<api_TString>`  **PipelineTask::outputName** (int  *index*) const

Returns by *index* a name of output.

----

.. _api_PipelineTask_a29be786:

 void **PipelineTask::resize** (int  *width*, int  *height*)

A callback to react on screen *width* and *height* changed.

----

.. _api_PipelineTask_1ce79b38:

 void **PipelineTask::setContext** (:ref:`PipelineContext<api_PipelineContext>` * *context*)

Sets the pipeline *context* which the given task belongs.

----

.. _api_PipelineTask_6a2b0f38:

 void **PipelineTask::setEnabled** (bool  *enable*)

Sets task to *enable* or disable. The disabled effect will not be executed.

**See also** isEnabled().

----

.. _api_PipelineTask_6589d3b2:

 void **PipelineTask::setInput** (int  *index*, :ref:`Texture<api_Texture>` * *source*)

Set a *source* texture with given *index* to use it in the render task.


