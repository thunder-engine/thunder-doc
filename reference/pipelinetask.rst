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
|                           void | :ref:`analyze<api_PipelineTask_a73d2f9e>` (World * world)                                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`exec<api_PipelineTask_73c09682>` ()                                                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`filterByLayer<api_PipelineTask_b1d4730a>` (const RenderList & in, PipelineTask::GroupList & out, int  layer) const |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`group<api_PipelineTask_7e32d514>` (const PipelineTask::GroupList & in, PipelineTask::GroupList & out) const        |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`inputCount<api_PipelineTask_672e9a1d>` () const                                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`inputName<api_PipelineTask_5f8e3c7b>` (int  index) const                                                           |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`isEnabled<api_PipelineTask_c867bdaf>` () const                                                                     |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`output<api_PipelineTask_0da57b3e>` (int  index)                                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`outputCount<api_PipelineTask_498f5b2a>` () const                                                                   |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`outputName<api_PipelineTask_e12bdac8>` (int  index) const                                                          |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`resize<api_PipelineTask_83dca52e>` (int  width, int  height)                                                       |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setContext<api_PipelineTask_9d10f58c>` (PipelineContext * context)                                                 |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setEnabled<api_PipelineTask_9b312d0f>` (bool  enable)                                                              |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setInput<api_PipelineTask_4309d6e5>` (int  index, Texture * source)                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineTask_static:

Static Methods
--------------

None

.. _api_PipelineTask_methods:

Methods Description
-------------------

.. _api_PipelineTask_a73d2f9e:

 void **PipelineTask::analyze** (:ref:`World<api_World>` * *world*)

This method can be used to analyze a scene graphs for the provided world.

----

.. _api_PipelineTask_73c09682:

 void **PipelineTask::exec** ()

Executes the rendering commands associated with this pipeline task.

----

.. _api_PipelineTask_b1d4730a:

 void **PipelineTask::filterByLayer** (RenderList & *in*, :ref:`PipelineTask::GroupList<api_PipelineTask_GroupList>` & *out*, int  *layer*) const

Filters *out* an *in* renderable components by it's material layer.

----

.. _api_PipelineTask_7e32d514:

 void **PipelineTask::group** (:ref:`PipelineTask::GroupList<api_PipelineTask_GroupList>` & *in*, :ref:`PipelineTask::GroupList<api_PipelineTask_GroupList>` & *out*) const

Groups elements from *in* list into *out* rendering instances.

----

.. _api_PipelineTask_672e9a1d:

 int **PipelineTask::inputCount** () const

Return the number of inputs.

----

.. _api_PipelineTask_5f8e3c7b:

 :ref:`TString<api_TString>`  **PipelineTask::inputName** (int  *index*) const

Returns by *index* a name of input.

----

.. _api_PipelineTask_c867bdaf:

 bool **PipelineTask::isEnabled** () const

Returns true if task is enabled; otherwise returns false.

----

.. _api_PipelineTask_0da57b3e:

 :ref:`Texture<api_Texture>` * **PipelineTask::output** (int  *index*)

Returns by *index* a result of task as a render texture.

----

.. _api_PipelineTask_498f5b2a:

 int **PipelineTask::outputCount** () const

Return the number of outputs.

----

.. _api_PipelineTask_e12bdac8:

 :ref:`TString<api_TString>`  **PipelineTask::outputName** (int  *index*) const

Returns by *index* a name of output.

----

.. _api_PipelineTask_83dca52e:

 void **PipelineTask::resize** (int  *width*, int  *height*)

A callback to react on screen *width* and *height* changed.

----

.. _api_PipelineTask_9d10f58c:

 void **PipelineTask::setContext** (:ref:`PipelineContext<api_PipelineContext>` * *context*)

Sets the pipeline *context* which the given task belongs.

----

.. _api_PipelineTask_9b312d0f:

 void **PipelineTask::setEnabled** (bool  *enable*)

Sets task to *enable* or disable. The disabled effect will not be executed.

**See also** isEnabled().

----

.. _api_PipelineTask_4309d6e5:

 void **PipelineTask::setInput** (int  *index*, :ref:`Texture<api_Texture>` * *source*)

Set a *source* texture with given *index* to use it in the render task.


