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
|                           void | :ref:`analyze<api_PipelineTask_6f9dc8b7>` (World * world)                                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`exec<api_PipelineTask_164fea5b>` ()                                                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`filterByLayer<api_PipelineTask_ae72fd45>` (const RenderList & in, PipelineTask::GroupList & out, int  layer) const |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`group<api_PipelineTask_d0fcb153>` (const PipelineTask::GroupList & in, PipelineTask::GroupList & out) const        |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`inputCount<api_PipelineTask_408f9bd3>` () const                                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`inputName<api_PipelineTask_f60cdba8>` (int  index) const                                                           |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`isEnabled<api_PipelineTask_64f089b7>` () const                                                                     |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`output<api_PipelineTask_cf7dbe28>` (int  index)                                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`outputCount<api_PipelineTask_a7106592>` () const                                                                   |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`outputName<api_PipelineTask_2d49fbe7>` (int  index) const                                                          |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`resize<api_PipelineTask_17bd956a>` (int  width, int  height)                                                       |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setContext<api_PipelineTask_36fe0251>` (PipelineContext * context)                                                 |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setEnabled<api_PipelineTask_e260815c>` (bool  enable)                                                              |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setInput<api_PipelineTask_b729e8ca>` (int  index, Texture * source)                                                |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineTask_static:

Static Methods
--------------

None

.. _api_PipelineTask_methods:

Methods Description
-------------------

.. _api_PipelineTask_6f9dc8b7:

 void **PipelineTask::analyze** (:ref:`World<api_World>` * *world*)

This method can be used to analyze a scene graphs for the provided *world*.

----

.. _api_PipelineTask_164fea5b:

 void **PipelineTask::exec** ()

Executes the rendering commands associated with this pipeline task.

----

.. _api_PipelineTask_ae72fd45:

 void **PipelineTask::filterByLayer** (:ref:`RenderList<api_RenderList>` & *in*, :ref:`PipelineTask::GroupList<api_PipelineTask::GroupList>` & *out*, int  *layer*) const

Filters *out* an *in* renderable components by it's material *layer*.

----

.. _api_PipelineTask_d0fcb153:

 void **PipelineTask::group** (:ref:`PipelineTask::GroupList<api_PipelineTask::GroupList>` & *in*, :ref:`PipelineTask::GroupList<api_PipelineTask::GroupList>` & *out*) const

Groups elements from *in* list *in*to *out* rendering *in*stances.

----

.. _api_PipelineTask_408f9bd3:

 int **PipelineTask::inputCount** () const

Return the number of inputs.

----

.. _api_PipelineTask_f60cdba8:

 :ref:`TString<api_TString>`  **PipelineTask::inputName** (int  *index*) const

Returns by *index* a name of input.

----

.. _api_PipelineTask_64f089b7:

 bool **PipelineTask::isEnabled** () const

Returns true if task is enabled; otherwise returns false.

----

.. _api_PipelineTask_cf7dbe28:

 :ref:`Texture<api_Texture>` * **PipelineTask::output** (int  *index*)

Returns by *index* a result of task as a render texture.

----

.. _api_PipelineTask_a7106592:

 int **PipelineTask::outputCount** () const

Return the number of outputs.

----

.. _api_PipelineTask_2d49fbe7:

 :ref:`TString<api_TString>`  **PipelineTask::outputName** (int  *index*) const

Returns by *index* a name of output.

----

.. _api_PipelineTask_17bd956a:

 void **PipelineTask::resize** (int  *width*, int  *height*)

A callback to react on screen *width* and *height* changed.

----

.. _api_PipelineTask_36fe0251:

 void **PipelineTask::setContext** (:ref:`PipelineContext<api_PipelineContext>` * *context*)

Sets the pipeline *context* which the given task belongs.

----

.. _api_PipelineTask_e260815c:

 void **PipelineTask::setEnabled** (bool  *enable*)

Sets task to *enable* or disable. The disabled effect will not be executed.

**See also** isEnabled().

----

.. _api_PipelineTask_b729e8ca:

 void **PipelineTask::setInput** (int  *index*, :ref:`Texture<api_Texture>` * *source*)

Set a *source* texture with given *index* to use it in the render task.


