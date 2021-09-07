.. _api_PostProcessor:
PostProcessor Class
================

Inherited: None

.. _api_PostProcessor_description:
Description
-----------

A base class for all post effects.

All post effects must be inherited from this class.



.. _api_PostProcessor_public:
Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------------------------+
|                                     | :ref:`PostProcessor<api_PostProcessor_PostProcessor>` ()                                 |
+-------------------------------------+------------------------------------------------------------------------------------------+
|                                     | :ref:`~PostProcessor<api_PostProcessor_~PostProcessor>` ()                               |
+-------------------------------------+------------------------------------------------------------------------------------------+
|       :ref:`Texture<api_Texture>` * | :ref:`draw<api_PostProcessor_draw>` (Texture * source, Pipeline * pipeline)              |
+-------------------------------------+------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isEnabled<api_PostProcessor_isEnabled>` () const                                   |
+-------------------------------------+------------------------------------------------------------------------------------------+
|       :ref:`uint32_t<api_uint32_t>` | :ref:`layer<api_PostProcessor_layer>` () const                                           |
+-------------------------------------+------------------------------------------------------------------------------------------+
| :ref:`const char<api_const char>` * | :ref:`name<api_PostProcessor_name>` () const                                             |
+-------------------------------------+------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`resize<api_PostProcessor_resize>` (int32_t  width, int32_t  height)                |
+-------------------------------------+------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setEnabled<api_PostProcessor_setEnabled>` (bool  enable)                           |
+-------------------------------------+------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setSettings<api_PostProcessor_setSettings>` (const PostProcessSettings & settings) |
+-------------------------------------+------------------------------------------------------------------------------------------+



.. _api_PostProcessor_static:
Static Methods
--------------

None

.. _api_PostProcessor_methods:
Methods Description
-------------------

.. _api_PostProcessor_PostProcessor:

**PostProcessor::PostProcessor** ()

Default constructs an instance of PostProcessor.

----

.. _api_PostProcessor_~PostProcessor:

**PostProcessor::~PostProcessor** ()

Destroys the instance of PostProcessor. The destructor is virtual.

----

.. _api_PostProcessor_draw:

:ref:`Texture<api_Texture>` * **PostProcessor::draw** (:ref:`Texture<api_Texture>` * *source*, :ref:`Pipeline<api_Pipeline>` * *pipeline*)

The main method to apply post effect. The effect will be applied to *source* buffer for the provided *pipeline*.

----

.. _api_PostProcessor_isEnabled:

:ref:`bool<api_bool>`  **PostProcessor::isEnabled** () const

Returns true if post effect is enabled; otherwise returns false.

----

.. _api_PostProcessor_layer:

:ref:`uint32_t<api_uint32_t>`  **PostProcessor::layer** () const

Returns a layer where post effect will be called.

----

.. _api_PostProcessor_name:

:ref:`const char<api_const char>` * **PostProcessor::name** () const

Returns a name of post effect.

----

.. _api_PostProcessor_resize:

:ref:`void<api_void>`  **PostProcessor::resize** (:ref:`int32_t<api_int32_t>`  *width*, :ref:`int32_t<api_int32_t>`  *height*)

A callback to react on screen *width* and *height* changed.

----

.. _api_PostProcessor_setEnabled:

:ref:`void<api_void>`  **PostProcessor::setEnabled** (:ref:`bool<api_bool>`  *enable*)

Sets post effect to *enable* or disable. The disabled effect will not be applied.

**See also** isEnabled().

----

.. _api_PostProcessor_setSettings:

:ref:`void<api_void>`  **PostProcessor::setSettings** (:ref:`PostProcessSettings<api_PostProcessSettings>` & *settings*)

A callback to react on chage of post effect *settings*.

----


