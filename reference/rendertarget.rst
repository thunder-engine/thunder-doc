.. _api_RenderTarget:
RenderTarget Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_RenderTarget_description:
Description
-----------

Represents offscreen render pass.



.. _api_RenderTarget_public:
Public Methods
--------------

+-------------------------------+-----------------------------------------------------------------------------------------------------+
|                               | :ref:`RenderTarget<api_RenderTarget_RenderTarget>` ()                                               |
+-------------------------------+-----------------------------------------------------------------------------------------------------+
|                               | :ref:`~RenderTarget<api_RenderTarget_~RenderTarget>` ()                                             |
+-------------------------------+-----------------------------------------------------------------------------------------------------+
| :ref:`Texture<api_Texture>` * | :ref:`colorAttachment<api_RenderTarget_colorAttachment>` (uint32_t  index) const                    |
+-------------------------------+-----------------------------------------------------------------------------------------------------+
| :ref:`uint32_t<api_uint32_t>` | :ref:`colorAttachmentCount<api_RenderTarget_colorAttachmentCount>` () const                         |
+-------------------------------+-----------------------------------------------------------------------------------------------------+
| :ref:`Texture<api_Texture>` * | :ref:`depthAttachment<api_RenderTarget_depthAttachment>` () const                                   |
+-------------------------------+-----------------------------------------------------------------------------------------------------+
| :ref:`uint32_t<api_uint32_t>` | :ref:`setColorAttachment<api_RenderTarget_setColorAttachment>` (uint32_t  index, Texture * texture) |
+-------------------------------+-----------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`setDepthAttachment<api_RenderTarget_setDepthAttachment>` (Texture * texture)                  |
+-------------------------------+-----------------------------------------------------------------------------------------------------+



.. _api_RenderTarget_static:
Static Methods
--------------

+-------------------------------------------------------------------+---------------------------------------------------+
|         :ref:`const MetaEnum::Table<api_const MetaEnum::Table>` * | :ref:`enums<api_RenderTarget_enums>` ()           |
+-------------------------------------------------------------------+---------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_RenderTarget_methods>` ()       |
+-------------------------------------------------------------------+---------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_RenderTarget_properties>` () |
+-------------------------------------------------------------------+---------------------------------------------------+

.. _api_RenderTarget_methods:
Methods Description
-------------------

.. _api_RenderTarget_RenderTarget:

**RenderTarget::RenderTarget** ()

Default constructs an instance of RenderTarget.

----

.. _api_RenderTarget_~RenderTarget:

**RenderTarget::~RenderTarget** ()

Destroys the instance of RenderTarget. The destructor is virtual.

----

.. _api_RenderTarget_colorAttachment:

:ref:`Texture<api_Texture>` * **RenderTarget::colorAttachment** (:ref:`uint32_t<api_uint32_t>`  *index*) const

Returns the attached color textures with *index*.

**See also** setColorAttachment().

----

.. _api_RenderTarget_colorAttachmentCount:

:ref:`uint32_t<api_uint32_t>`  **RenderTarget::colorAttachmentCount** () const

Returns the number of attached color textures.

----

.. _api_RenderTarget_depthAttachment:

:ref:`Texture<api_Texture>` * **RenderTarget::depthAttachment** () const

Returns an attached depth texture if exist.

**See also** setDepthAttachment().

----

.. _api_RenderTarget_enums:

:ref:`const MetaEnum::Table<api_const MetaEnum::Table>` * **RenderTarget::enums** ()

----

.. _api_RenderTarget_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **RenderTarget::methods** ()

----

.. _api_RenderTarget_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **RenderTarget::properties** ()

----

.. _api_RenderTarget_setColorAttachment:

:ref:`uint32_t<api_uint32_t>`  **RenderTarget::setColorAttachment** (:ref:`uint32_t<api_uint32_t>`  *index*, :ref:`Texture<api_Texture>` * *texture*)

Attach a color *texture* at *index* to render target.

**See also** colorAttachment().

----

.. _api_RenderTarget_setDepthAttachment:

:ref:`void<api_void>`  **RenderTarget::setDepthAttachment** (:ref:`Texture<api_Texture>` * *texture*)

Attach a depth *texture* to render target.

**See also** depthAttachment().

----


