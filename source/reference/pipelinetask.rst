.. _api_PipelineTask:

PipelineTask
============

Inherited: None

.. _api_PipelineTask_description:

Description
-----------

All render tasks must be inherited from this class.



.. _api_PipelineTask_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`analyze<api_PipelineTask_439210c8>` (World * world)                                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`exec<api_PipelineTask_857903df>` ()                                                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`filterByLayer<api_PipelineTask_5b409fc8>` (const RenderList & in, PipelineTask::GroupList & out, int  layer) const |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`group<api_PipelineTask_fa72dc59>` (const PipelineTask::GroupList & in, PipelineTask::GroupList & out) const        |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`inputCount<api_PipelineTask_bd358c60>` () const                                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`inputName<api_PipelineTask_db63587a>` (int  index) const                                                           |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`isEnabled<api_PipelineTask_c8b9e47a>` () const                                                                     |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`output<api_PipelineTask_1b3a6e29>` (int  index)                                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`outputCount<api_PipelineTask_d67f58e1>` () const                                                                   |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`outputName<api_PipelineTask_3b47c50e>` (int  index) const                                                          |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`resize<api_PipelineTask_8705c19f>` (int  width, int  height)                                                       |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setContext<api_PipelineTask_4e51bc2d>` (PipelineContext * context)                                                 |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setEnabled<api_PipelineTask_72e08f65>` (bool  enable)                                                              |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setInput<api_PipelineTask_708a2fbe>` (int  index, Texture * source)                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineTask_static:

Static Methods
--------------

None

.. _api_PipelineTask_methods:

Methods Description
-------------------

.. _api_PipelineTask_439210c8:

 void **PipelineTask::analyze** (:ref:`World<api_World>` * *world*)

This method can be used to analyze a scene graphs for the provided world.

----

.. _api_PipelineTask_857903df:

 void **PipelineTask::exec** ()

Executes the rendering commands associated with this pipeline task.

----

.. _api_PipelineTask_5b409fc8:

 void **PipelineTask::filterByLayer** (RenderList & *in*, :ref:`PipelineTask::GroupList<api_PipelineTask_GroupList>` & *out*, int  *layer*) const

Filters *out* an *in* renderable components by it's material layer.

----

.. _api_PipelineTask_fa72dc59:

 void **PipelineTask::group** (:ref:`PipelineTask::GroupList<api_PipelineTask_GroupList>` & *in*, :ref:`PipelineTask::GroupList<api_PipelineTask_GroupList>` & *out*) const

Groups elements from *in* list into *out* rendering instances.

----

.. _api_PipelineTask_bd358c60:

 int **PipelineTask::inputCount** () const

Return the number of inputs.

----

.. _api_PipelineTask_db63587a:

 :ref:`TString<api_TString>`  **PipelineTask::inputName** (int  *index*) const

Returns by *index* a name of input.

----

.. _api_PipelineTask_c8b9e47a:

 bool **PipelineTask::isEnabled** () const

Returns true if task is enabled; otherwise returns false.

----

.. _api_PipelineTask_1b3a6e29:

 :ref:`Texture<api_Texture>` * **PipelineTask::output** (int  *index*)

Returns by *index* a result of task as a render texture.

----

.. _api_PipelineTask_d67f58e1:

 int **PipelineTask::outputCount** () const

Return the number of outputs.

----

.. _api_PipelineTask_3b47c50e:

 :ref:`TString<api_TString>`  **PipelineTask::outputName** (int  *index*) const

Returns by *index* a name of output.

----

.. _api_PipelineTask_8705c19f:

 void **PipelineTask::resize** (int  *width*, int  *height*)

A callback to react on screen *width* and *height* changed.

----

.. _api_PipelineTask_4e51bc2d:

 void **PipelineTask::setContext** (:ref:`PipelineContext<api_PipelineContext>` * *context*)

Sets the pipeline *context* which the given task belongs.

----

.. _api_PipelineTask_72e08f65:

 void **PipelineTask::setEnabled** (bool  *enable*)

Sets task to *enable* or disable. The disabled effect will not be executed.

**See also** isEnabled().

----

.. _api_PipelineTask_708a2fbe:

 void **PipelineTask::setInput** (int  *index*, :ref:`Texture<api_Texture>` * *source*)

Set a *source* texture with given *index* to use it in the render task.


